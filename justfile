# shellcheck disable=SC2148
set dotenv-load
set export

@check-BW_SESSION-is-set:
    if [ -z "${BW_SESSION}" ]; then \
        echo "BW_SESSION is not set"; \
        exit 1; \
    fi

@create-release:
  if [ "$(git-sv nv)" != "$(git tag --list --sort=-creatordate | head -n 1)" ]; then \
    echo; \
    echo "---------------------------------"; \
    echo "CREATE RELEASE $(git-sv nv)"; \
    echo "---------------------------------"; \
    echo; \
    awk '$0 = NR==1 ? replace : $0' replace="$(git-sv cgl --add-next-version -n 0)" CHANGELOG.md > tmp_cgl && mv tmp_cgl CHANGELOG.md; \
    git add CHANGELOG.md; \
    git commit -m "chore: update CHANGELOG.md to $(git-sv nv)"; \
    git push; \
    release_path="$(git rev-parse --show-toplevel)/release/"; \
    assets="--asset=$(find "$release_path" -mindepth 1 -maxdepth 1 -print0 | xargs --null realpath | xargs echo | sed 's/ / --asset=/g')"; \
    tea r create --tag "$(git-sv nv)" -t "$(git-sv nv)" --note "$(git-sv rn)" --target="$(git rev-parse --abbrev-ref HEAD)" "${assets}"; \
  else \
    echo; \
    echo "---------------------------------"; \
    echo "NO RELEASE CREATED!"; \
    echo "---------------------------------"; \
    echo; \
  fi

@delete-current-release:
    current_version="$(git-sv cv)"; \
    echo; \
    echo "---------------------------------"; \
    echo "DELETE RELEASE $current_version"; \
    echo "---------------------------------"; \
    echo; \
    git tag -d "$current_version"; \
    tea r delete -y --delete-tag "$current_version"

sync-versions:
  sed -i "s/\"version\": \"\([0-9]\+\)\.\([0-9]\+\)\.\([0-9]\+\)\"/\"version\": \"$(git-sv nv)\"/g" ./package.json
  sed -i "s/\"version\": \"\([0-9]\+\)\.\([0-9]\+\)\.\([0-9]\+\)\"/\"version\": \"$(node -p "require('./package.json').version")\"/g" web/package.json
  sed -i "s/\"version\": \"\([0-9]\+\)\.\([0-9]\+\)\.\([0-9]\+\)\"/\"version\": \"$(node -p "require('./package.json').version")\"/g" api/package.json

build-containers: check-BW_SESSION-is-set sync-versions
  echo "Building docker images..."
  docker compose -f docker-compose.prod.yml build

  echo "Tagging docker images with version $(git-sv nv)..."
  docker tag tm4soulch-web:latest tm4soul.ch/tm4soulch-web:$(git-sv nv)
  docker tag tm4soulch-api:latest tm4soul.ch/tm4soulch-api:$(git-sv nv)

  echo "Saving docker images to tar files..."
  docker save -o iac/dist/tm4soulch-web.tar tm4soul.ch/tm4soulch-web:$(git-sv nv)
  docker save -o iac/dist/tm4soulch-api.tar tm4soul.ch/tm4soulch-api:$(git-sv nv)

push-images: check-BW_SESSION-is-set
  cd iac && ansible-playbook -i inventory playbook-deploy-docker.yml -t push

load-images: check-BW_SESSION-is-set
  cd iac && ansible-playbook -i inventory playbook-deploy-docker.yml -t load

finish:
  @echo
  @echo "---------------------------------"
  @echo "DEPLOY FINISHED!"
  @echo "---------------------------------"
  @echo

hwkey-interaction:
  @echo
  @echo "---------------------------------"
  @echo "INTERACT WITH YOUR HW CRYPTO KEY!"
  @echo "---------------------------------"
  @echo
