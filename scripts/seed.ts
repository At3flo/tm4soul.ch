import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

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
        tagWeight: 1,
      },
      {
        tagTitleNormalized: 'NATURPROJEKT',
        tagTitleWithDiacritics: 'Naturprojekt',
        tagDescription:
          'Egal ob geradlinig und schlank wie eine Birke, oder krumm und knorrig wie ein Olivenbaum. Die Natur ist perfekt wie sie ist - wie der menschliche Körper auch. Das Projekt besteht darin, die verschiedenen Körper in ihrer individuellen Schönheit in Symbiose mit der Natur fotografisch festzuhalten.',
        tagWeight: 1,
      },
      {
        tagTitleNormalized: 'PORTRAIT',
        tagTitleWithDiacritics: 'Portrait',
        tagDescription:
          'Menschen, Gesichter, Ausdrücke und Impressionen – ein Spiel mit Licht und Schatten vermischt mit deiner Physiognomie und Mimik verwandelt jedes Antlitz in ein Kunstwerk. Einzigartige Bilder, die deine Persönlichkeit und Schönheit hervorheben und unterstreichen.',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'STUDIO',
        tagTitleWithDiacritics: 'Studio',
        tagDescription:
          'Alles was das Herz begehrt – das Studio im Dachstock ermöglicht es uns, deine Ideen, Wünsche und Fantasien in Bilder zu verpacken. Dir fehlt die Fantasie? Dann lass dich von unserer Fotogalerie inspirieren.',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'PROJEKTE',
        tagTitleWithDiacritics: 'Projekte',
        tagDescription:
          'Stets neue Ideen und Herausforderungen sind unser Markenzeichen. Egal ob ein brennendes Klavier in der Natur, oder hunderte Taschenuhren die dem Uhrmacher um die Ohren fliegen – je verrückter umso lieber!',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'FRAUENBILDER',
        tagTitleWithDiacritics: 'Frauenbilder',
        tagDescription:
          'Feiere dich und deine Weiblichkeit und gönn dir ein sinnliches Fotoshooting. Fühle dich schön, sexy und unwiderstehlich, verliebe dich in dich selbst. Einzigartige Bilder, die die Persönlichkeit der Frau und deren Schönheit hervorheben und unterstreichen.',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'MAENNERPORTRAIT',
        tagTitleWithDiacritics: 'Männerportrait',
        tagDescription:
          'Ausdruckstarke Gesichter sagen mehr als viele Worte. Männerportraits etwas anders dargestellt, das Spiel mit Licht und Schatten und harten Kontrasten. Einzigartige Bilder, die die Persönlichkeit des Mannes hervorheben und unterstreichen.',
        tagWeight: 2,
      },
      {
        tagTitleNormalized: 'NATUR UND TIER',
        tagTitleWithDiacritics: 'Natur und Tier',
        tagDescription:
          'Wunderschöne Portraits von deiner Katze, actiongeladene Rennfotos von deinem Hund... Du und dein Liebling zu Hause, in der Natur oder im Studio, entspannt und unkompliziert.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'OLDTIMER UND BIKES',
        tagTitleWithDiacritics: 'Oldtimer und Bikes',
        tagDescription:
          'Obwohl zum Teil in die Jahre gekommen, haben die edlen Stücke kein Bisschen an Faszination verloren, im Gegenteil, das auf Hochglanz polierte Chrom bringt so manches Herz zum klopfen... Gerne draussen, an ausgewählter Location oder besonderem Anlass. Jedes Bike ist einmalig, in unserer extra nach Vintage eingerichteter Garage, setzen wir dein Bijou bei jedem Wetter ins richtige Licht.',
        tagWeight: 3,
      },
      {
        tagTitleNormalized: 'FAMILIEN UND PAARE',
        tagTitleWithDiacritics: 'Familien und Paare',
        tagDescription:
          'Das gewisse Etwas als Geschenk zum Valentinstag, oder Familienzusammenkunft ohne besonderen Anlass, festgehalten als Erinnerung. Familienshooting oder sinnliche Stunden zu zweit – der Moment zählt, in der richtigen Sekunde auf den Auslöser gedrückt für unvergessliche Bilder.',
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
        tagTitleNormalized: 'PRODUKTE UND INSEZNIERUNGEN',
        tagTitleWithDiacritics: 'Produkte und Inseznierungen',
        tagDescription:
          'Jedes Ding an seinem Ort …  und manchmal helfen wir etwas nach… die richtige Mischung bringt das perfekte Gericht. Mit unserem Fundus an Möbeln und Dekomaterial inszenieren wir dein Produkt und geben dem Bild die richtige Würze.',
        tagWeight: 4,
      },
      {
        tagTitleNormalized: 'TATTOO',
        tagTitleWithDiacritics: 'Tattoo',
        tagDescription:
          'Das Kunstwerk auf deinem Körper, gestochen scharf abgebildet, in perfektem Licht, Körperposition  und Ausdruck abgebildet - macht sich wunderbar und einmalig als Bild im Wohnraum, wo du dich voller Stolz täglich betrachten, oder betrachten lassen, kannst.',
        tagWeight: 4,
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
        tagTitleNormalized: 'BEWERBUNG',
        tagTitleWithDiacritics: 'Bewerbung',
        tagDescription:
          'Das Bewerbungsfoto ist der erste wichtige Eindruck einer Bewerbung. Erhöhe Deine beruflichen Chancen zu deinem Traumjob mit einem professionellen Bewerbungsfoto.',
        tagWeight: 5,
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
        tagWeight: 6,
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
        tagTitleNormalized: 'DROHNE',
        tagTitleWithDiacritics: 'Drohne',
        tagDescription:
          'Folgt',
        tagWeight: 6,
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

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
    )

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
