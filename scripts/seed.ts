import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

import { hashPassword } from '@redwoodjs/auth-dbauth-api'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.TagCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      {
        tagTitleNormalized: 'FOTOTHERAPIE',
        tagTitleWithDiacritics: 'Fototherapie',
        tagDescription:
          'Körperliche Veränderungen, oder mangelndes Selbstvertrauen – sich selber schön finden und lieben können ist keine Selbstverständlichkeit. Aber lernbar. Denn Schönheit ist überall – manchmal erkennen wir sie nur (noch) nicht.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'NATURPROJEKT',
        tagTitleWithDiacritics: 'Naturprojekt',
        tagDescription:
          'Egal ob geradlinig und schlank wie eine Birke, oder krumm und knorrig wie ein Olivenbaum. Die Natur ist perfekt wie sie ist - wie der menschliche Körper auch. Das Projekt besteht darin, die verschiedenen Körper in ihrer individuellen Schönheit in Symbiose mit der Natur fotografisch festzuhalten.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'PORTRAIT',
        tagTitleWithDiacritics: 'Portrait',
        tagDescription:
          'Menschen, Gesichter, Ausdrücke und Impressionen – ein Spiel mit Licht und Schatten vermischt mit deiner Physiognomie und Mimik verwandelt jedes Antlitz in ein Kunstwerk. Einzigartige Bilder, die deine Persönlichkeit und Schönheit hervorheben und unterstreichen.',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'STUDIO',
        tagTitleWithDiacritics: 'Studio',
        tagDescription:
          'Alles was das Herz begehrt – das Studio im Dachstock ermöglicht es uns, deine Ideen, Wünsche und Fantasien in Bilder zu verpacken. Dir fehlt die Fantasie? Dann lass dich von unserer Fotogalerie inspirieren.',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'PROJEKTE',
        tagTitleWithDiacritics: 'Projekte',
        tagDescription:
          'Stets neue Ideen und Herausforderungen sind unser Markenzeichen. Egal ob ein brennendes Klavier in der Natur, oder hunderte Taschenuhren die dem Uhrmacher um die Ohren fliegen – je verrückter umso lieber!',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'LES FEMMES',
        tagTitleWithDiacritics: 'Les Femmes',
        tagDescription:
          'Feiere dich und deine Weiblichkeit und gönn dir ein sinnliches Fotoshooting. Fühle dich schön, sexy und unwiderstehlich, verliebe dich in dich selbst. Einzigartige Bilder, die die Persönlichkeit der Frau und deren Schönheit hervorheben und unterstreichen.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'MAENNERPORTRAIT',
        tagTitleWithDiacritics: 'Männerportrait',
        tagDescription:
          'Ausdruckstarke Gesichter sagen mehr als viele Worte. Männerportraits etwas anders dargestellt, das Spiel mit Licht und Schatten und harten Kontrasten. Einzigartige Bilder, die die Persönlichkeit des Mannes hervorheben und unterstreichen.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'NATUR UND TIER',
        tagTitleWithDiacritics: 'Natur und Tier',
        tagDescription:
          'Wunderschöne Portraits von deiner Katze, actiongeladene Rennfotos von deinem Hund... Du und dein Liebling zu Hause, in der Natur oder im Studio, entspannt und unkompliziert.',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'OLDTIMER',
        tagTitleWithDiacritics: 'Oldtimer und Bikes',
        tagDescription:
          'Obwohl zum Teil in die Jahre gekommen, haben die edlen Stücke kein Bisschen an Faszination verloren, im Gegenteil, das auf Hochglanz polierte Chrom bringt so manches Herz zum klopfen... Gerne draussen, an ausgewählter Location oder besonderem Anlass. Jedes Fahrzeug ist einmalig.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'FAMILIEN UND PAARE',
        tagTitleWithDiacritics: 'Familien und Paare',
        tagDescription:
          'Familienshooting oder sinnliche Stunden zu zweit – der Moment zählt, in der richtigen Sekunde auf den Auslöser gedrückt für unvergessliche Bilder. Als spezielles Geschenk zum Valentinstag, oder die Familienzusammenkunft ohne besonderen Anlass als schöne Erinnerung festgehalten.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'STEAMPUNK',
        tagTitleWithDiacritics: 'Steampunk',
        tagDescription:
          'Der Zauber einer längst vergangenen Zukunft. Eine kulturelle Bewegung, die eine faszinierende Mischung aus spätviktorianischem Design mit abenteuerlicher Science-Fiction vermischt. In unserem Atelier warten neben den fertigen Kunstwerken noch zahlreiche Einzelteile diverser antiker Maschinen darauf, zu neuem Leben erweckt zu werden.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'MUSIK UND TANZ',
        tagTitleWithDiacritics: 'Musik und Tanz',
        tagDescription:
          'Ob auf der Bühne, im Studio oder auf der Strasse, dynamische Momente und visuell faszinierende Bewegungen verleihen dem Bild Melodien.',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'PRODUKTE UND AUFTRAEGE',
        tagTitleWithDiacritics: 'Produkte und Aufträge',
        tagDescription:
          'Jedes Ding an seinem Ort …  und manchmal helfen wir etwas nach… die richtige Mischung bringt das perfekte Gericht. Mit unserem Fundus an Möbeln und Dekomaterial inszenieren wir dein Produkt und geben dem Bild die richtige Würze.',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'TATTOO',
        tagTitleWithDiacritics: 'Tattoo',
        tagDescription:
          'Das Kunstwerk auf deinem Körper, gestochen scharf abgebildet, in perfektem Licht, Körperposition  und Ausdruck abgebildet - macht sich wunderbar und einmalig als Bild im Wohnraum, wo du dich voller Stolz täglich betrachten, oder betrachten lassen, kannst.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'BOUDOIR UND GLAMOUR',
        tagTitleWithDiacritics: 'Boudoir und Glamour',
        tagDescription:
          'Sei für einen Moment die Verführung, oder lass dich verführen - im Zauber von Glamour und Moulin Rouge… sinnliche Bilder die die Persönlichkeit der Frau und deren Schönheit hervorheben.',
        tagWeight: 5,
      },
      {
        tagTitleNormalized: 'ANLAESSE',
        tagTitleWithDiacritics: 'Anlässe',
        tagDescription:
          'Für bleibende Erinnerungen von privaten Glücksmomenten - hochwertige Bilder von wichtigen Anlässen wie Geburtstagsfeier, Hochzeit, oder Firmen-Events… Inszenierte Aufnahmen und Schnappschüsse von Personen und Settings.',
        tagWeight: 5,
      },
      {
        tagTitleNormalized: 'BUSINESS',
        tagTitleWithDiacritics: 'Business',
        tagDescription:
          'Das Bewerbungsfoto ist der erste wichtige Eindruck einer Bewerbung. Erhöhe Deine beruflichen Chancen zu deinem Traumjob mit einem professionellen Bewerbungsfoto.',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'KIDS',
        tagTitleWithDiacritics: 'Kids',
        tagDescription:
          'Ein Kinderportrait ist Momentaufnahme und Zeitdokument zugleich – an unseren Kindern sehen wir, wie schnell doch die Zeit vergeht. Kindershootings sind in jedem Alter eine Freude.',
        tagWeight: 5,
      },
      {
        tagTitleNormalized: 'FANTASIE UND COSPLAY',
        tagTitleWithDiacritics: 'Fantasie und Cosplay',
        tagDescription:
          'Hallo Prinzessin, hallo Wikinger – gemeinsam suchen wir nach der perfekten Location um dein Kostüm in Szene zu setzen. Rollenspiele soweit die Fantasie reicht. Stets neue Ideen und Herausforderungen sind unser Markenzeichen, je verrückter umso lieber!',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'BABYBAUCH UND NEWBORN',
        tagTitleWithDiacritics: 'Babybauch und Newborn',
        tagDescription:
          'Die Schwangerschaft, eine der eindrücklichsten Zeit im Leben, ein kleines Wunder geschieht. Mit viel Herz und Geduld gestalten wir traumhafte Bilder für bleibende Erinnerungen.',
        tagWeight: 6,
      },
      {
        tagTitleNormalized: 'ESSEN UND GETRAENKE',
        tagTitleWithDiacritics: 'Essen und Getränke',
        tagDescription:
          'Bilder die den Appetit anregen, denn das Auge isst mit. Manchmal macht es die richtige Mischung aus, und nur ein einziges, zusätzliches Dekostück bringt dein Menu zum Augenschmaus.',
        tagWeight: 6,
      },
      {
        tagTitleNormalized: 'AKT UND EROTIK',
        tagTitleWithDiacritics: 'Akt und Erotik',
        tagDescription: 'Coming soon...',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'SENSUAL PORTRAITS',
        tagTitleWithDiacritics: 'Sensual Portraits',
        tagDescription:
          'Ehrliche und ungeschönte Portraits von ungeschminkten Frauen jeden Alters, zeigen die natürliche Schönheit, Stärke und Verletzlichkeit einer jeden Frau, ohne vertuschendes MakeUp oder täuschende Filter. Sei wie du bist!',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'MAKING OFF',
        tagTitleWithDiacritics: 'Making off',
        tagDescription:
          'Lustige Momente in und ums Fotoshooting - der Blick hinter die Kamera',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'LE GARAGE',
        tagTitleWithDiacritics: 'Le Garage',
        tagDescription:
          'In unserem coolen vintage eingerichteten LE GARAGE knipsen wir geile Bilder von dir mit deinem Bike. Die spezifisch abgestimmte Nachbearbeitung der Aufnahmen bringt Lack und Chrom zum Glänzen und den Besitzer/in zum Strahlen. Egal ob Oldtimer, Chopper, CafeRacer oder Dirtbike….. alle 2Räder sind willkommen und werden stilvoll in Szene gesetzt.',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'SHIBARI',
        tagTitleWithDiacritics: 'Shibari',
        tagDescription: 'Coming soon...',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'STREETFOTOGRAFIE',
        tagTitleWithDiacritics: 'Streetfotografie',
        tagDescription: 'Coming soon...',
        tagWeight: 5,
      },
    ]
    console.log('\nSeeding Tags...\n')

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      data.map(async (data: Prisma.TagCreateArgs['data']) => {
        const record = await db.tag.create({ data })
        console.log(record)
      })
    ).then(() => {
      console.log('\nSeeding Images...\n')

      const images: Prisma.ImageCreateArgs['data'][] = [
        {
          uuidImage: 'b96ea44f-754b-4737-af7d-3a7280733eb5',
          imageFileExtension: 'webp',
          tags: {
            connect: [
              {
                tagTitleNormalized: 'FOTOTHERAPIE',
              },
              {
                tagTitleNormalized: 'PORTRAIT',
              },
            ],
          },
        },
        {
          uuidImage: 'd2c6ebe2-5e46-4bed-8b23-49bb3a15c671',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'MAKING OFF',
            },
          },
        },
        {
          uuidImage: 'f3f0b8bb-84c2-4cc1-962f-21da969c3c32',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'MAENNERPORTRAIT',
            },
          },
        },
        {
          uuidImage: '2ed94c9e-528a-416f-99a2-649112b43bfe',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'AKT UND EROTIK',
            },
          },
        },
        {
          uuidImage: '99faf649-4688-4b3e-899a-e555859eeb9b',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'ANLAESSE',
            },
          },
        },
        {
          uuidImage: '7290795c-c955-4bdf-8853-fa121d03fa7f',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'BABYBAUCH UND NEWBORN',
            },
          },
        },
        {
          uuidImage: 'cb98e852-6941-452d-8f87-0f3a3e7bec83',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'BOUDOIR UND GLAMOUR',
            },
          },
        },
        {
          uuidImage: '3b8ef7c1-3af4-4892-9b58-5e40d9d8a96c',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'BUSINESS',
            },
          },
        },
        {
          uuidImage: '5adca6ed-15b9-46c4-92e5-c1817d85ef0e',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'ESSEN UND GETRAENKE',
            },
          },
        },
        {
          uuidImage: 'bc1b21d8-4ff9-4a5d-8426-d2b8a0e73122',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'FAMILIEN UND PAARE',
            },
          },
        },
        {
          uuidImage: '3d6af620-56bd-4ce7-aa15-7a91cf263aff',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'KIDS',
            },
          },
        },
        {
          uuidImage: 'f74e0836-a7c8-43cc-812f-a7875c96bd4f',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'LE GARAGE',
            },
          },
        },
        {
          uuidImage: '85273ddf-de75-44ca-8de1-86ef6e36436b',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'LES FEMMES',
            },
          },
        },
        {
          uuidImage: '3a00ba26-3944-4d2f-a368-2a803039d7e1',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'MUSIK UND TANZ',
            },
          },
        },
        {
          uuidImage: '916c8930-3c05-4997-88d6-fe5cda1ff6ff',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'NATUR UND TIER',
            },
          },
        },
        {
          uuidImage: 'd1455951-1ce3-45c6-9cce-7cb2e5328417',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'NATURPROJEKT',
            },
          },
        },
        {
          uuidImage: '1634dd25-7c8e-417b-8168-81796eeaa1fb',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'OLDTIMER',
            },
          },
        },
        {
          uuidImage: '5b5b17f4-7aeb-431c-bcca-c088092eca54',
          imageFileExtension: 'jpg',
          tags: {
            connect: {
              tagTitleNormalized: 'PRODUKTE UND AUFTRAEGE',
            },
          },
        },
        {
          uuidImage: '76160bbd-975d-46a6-b07e-4cd0a869d119',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'PROJEKTE',
            },
          },
        },
        {
          uuidImage: 'b0a64f83-789e-4d24-befe-b996ca498506',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'SHIBARI',
            },
          },
        },
        {
          uuidImage: '998a5d12-3ba2-4929-a583-5fb686d2538b',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'STEAMPUNK',
            },
          },
        },
        {
          uuidImage: '8a1086a2-27bb-4194-9a26-a92ac8208824',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'STREETFOTOGRAFIE',
            },
          },
        },
        {
          uuidImage: '3b7ada1b-8469-4c72-8fa4-5c303cb35458',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'STUDIO',
            },
          },
        },
        {
          uuidImage: '09a98ea4-4fec-4644-aaf9-1776971aced3',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'TATTOO',
            },
          },
        },
        {
          uuidImage: 'c0ee918a-c69d-4535-826f-4f9c2f290eab',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'SENSUAL PORTRAITS',
            },
          },
        },
        {
          uuidImage: '5698506e-be86-4ec3-927a-4c040a3eb176',
          imageFileExtension: 'webp',
          tags: {
            connect: {
              tagTitleNormalized: 'FANTASIE UND COSPLAY',
            },
          },
        },
      ]

      Promise.all(
        images.map(async (image: Prisma.ImageCreateArgs['data']) => {
          try {
            const record = await db.image.create({
              data: image,
            })
            console.log(record)
            return record
          } catch (error) {
            console.log(
              `Task with uuid ${image.uuidImage} already exists, skipping...`
            )
            return null
          }
        })
      )
    })

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //

    const users = [{ name: 'admin', email: 'admin', password: 'tmtm4tm' }]

    console.log('\nSeeding users...\n')

    Promise.all(
      users.map(async (userData) => {
        const [hashedPassword, salt] = hashPassword(userData.password)
        const data = {
          ...userData,
          hashedPassword,
          salt,
        }
        delete data.password
        try {
          const record = await db.user.create({
            data: data,
          })
          console.log(record)
          return record
        } catch (error) {
          console.log(`User with uuid ${data.name} already exists, skipping...`)
          return null
        }
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
