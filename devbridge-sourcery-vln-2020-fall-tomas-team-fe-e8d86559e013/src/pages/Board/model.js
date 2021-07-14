const board = {
  boardId: 10,
  title: 'Board title',
  columns: [
    {
      id: 'first',
      name: 'Went well',
      note: 'happy',
      inputs: ['6d6aeefb-86eb-423c-8374-e83ef253076c'],
      items: [
        {
          columnId: 'first',
          itemId: '6d6aeefb-86eb-423c-8374-e83ef253076c',
          text: 'First Column First Item',
          voteCount: 3,
          comments: [
            {
              id: '7d6aeefb-86eb-423c-8374-e83ef253076c',
              text: 'This is mocked comment',
            },
          ],
        },
        {
          columnId: 'first',
          itemId: '6d6aeefb-86eb-423c-8374-e83ef253076d',
          text: 'First Column Second Item',
          voteCount: 2,
          comments: [],
        },
      ],
      isVotable: true,
    },
    {
      id: 'second',
      name: 'To improve',
      note: 'we-will-rock-you-in-the-future',
      inputs: [],
      items: [],
      isVotable: true,
    },
    {
      id: 'third',
      name: 'Action items',
      note: 'queue-the-rocky-music',
      inputs: [],
      items: [],
      isVotable: false,
    },
  ],
};
export default board;
