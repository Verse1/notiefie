export default function handler(req, res) {
  res.status(200).json(
    JSON.stringify([
      {
        title: 'ut et et',
        description: 'Quia inventore temporibus aliquam inventore ad.',
        id: '1',
      },
      {
        title: 'vitae et a',
        description: 'Voluptas saepe incidunt esse aut qui.',
        id: '2',
      },
      {
        title: 'consectetur provident iusto',
        description: 'Totam vel et ad aut nihil quia tenetur ut repudiandae.',
        id: '3',
      },
      {
        title: 'enim quidem eveniet',
        description: 'Est dolore est quia doloribus molestias.',
        id: '4',
      },
      {
        title: 'iusto minima quo',
        description:
          'Sint quaerat provident alias voluptas et non eligendi blanditiis.',
        id: '5',
      },
      {
        title: 'consequatur nihil aperiam',
        description: 'Sed quia voluptatem.',
        id: '6',
      },
      {
        title: 'aliquid veniam veritatis',
        description: 'Laboriosam hic voluptas quia unde.',
        id: '7',
      },
      {
        title: 'explicabo esse sed',
        description: 'Itaque consectetur ut laboriosam commodi nihil.',
        id: '8',
      },
    ])
  );
}
