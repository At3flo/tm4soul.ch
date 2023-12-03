#!/bin/bash

# Author: MBO
# Usage t4s-sops.sh $1
# -e for encrypt list of files below
# -d for decrypt list of files below
# -r for rotate keys on list of files below

# if no option specified or more than one option specified or option is not -e, -d or -r
if [ $# -ne 1 ] || [ "$1" != "-e" ] && [ "$1" != "-d" ] && [ "$1" != "-r" ]; then
    echo "Please specify option -e, -d or -r"
    echo "Usage:"
    echo "  -e: Encrypt files"
    echo "  -d: Decrypt files"
    echo "  -r: Rotate keys"
    exit 1
fi

for i in \
"iac/env/.prommanager.t4s-ctb-vps-eros.env" \

do
    # change extension .env to .enc.env
    file_name="${i%.env}.enc.env"
    # if encrypt
    if [ "$1" = "-e" ]; then
        echo "Encrypting $i"
        sops --config .sops.yaml "$1" "$i" > "$file_name"
    # if decrypt
    elif [ "$1" = "-d" ]; then
        echo "Decrypting $file_name"
        sops --config .sops.yaml "$1" "$file_name" > "$i"
    else
        sops --config .sops.yaml "$1" -i "$i"
    fi

done
