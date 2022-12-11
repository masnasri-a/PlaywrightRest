import { test, expect } from '@playwright/test';


test('should create a influencer', async ({ request }) => {
  // const newIssue = await request.post(`https://axc34w3au7.execute-api.ap-southeast-1.amazonaws.com/influencer/2`, {
  //   data: {
  //     title: '[Bug] report 1',
  //     body: 'Bug description',
  //   }
  // });
  // expect(newIssue.ok()).toBeTruthy();
  // const model = [
  //   {
  //     id: '03',
  //     name: 'acep',
  //   },
  //   {
  //     id: '04',
  //     name: 'ujang',
  //   }, {
  //     id: '05',
  //     name: 'arif',
  //   }
  // ]
  // model.map(async (detail: any, index) => {
  // console.log(detail);
  const newIssue1 = await request.post(`https://hls6g2z5h9.execute-api.ap-southeast-1.amazonaws.com/influencer`, {
    data: {
      id: "03",
      name: "acep",
    }
  });
  expect(newIssue1.ok()).toBeTruthy();
  expect(await newIssue1.json()).toEqual(expect.objectContaining(
    {
      id: '03',
      name: 'acep'
    }
  ));

  const newIssue2 = await request.post(`https://hls6g2z5h9.execute-api.ap-southeast-1.amazonaws.com/influencer`, {
    data: {
      id: "04",
      name: 'ujang',
    }
  });
  expect(newIssue2.ok()).toBeTruthy();
  expect(await newIssue2.json()).toEqual(expect.objectContaining(
    {
      id: '04',
      name: 'ujang',
    }
  ));
  const newIssue3 = await request.post(`https://hls6g2z5h9.execute-api.ap-southeast-1.amazonaws.com/influencer`, {
    data: {
      id: '05',
      name: 'arif',
    }
  });
  expect(newIssue3.ok()).toBeTruthy();
  expect(await newIssue3.json()).toEqual(expect.objectContaining(
    {
      id: '05',
      name: 'arif',
    }
  ));
  // })
});

test('should create a feature request', async ({ request }) => {

  const issues1 = await request.get(`https://hls6g2z5h9.execute-api.ap-southeast-1.amazonaws.com/influencer/03`);
  expect(issues1.ok()).toBeTruthy();
  expect(await issues1.json()).toEqual(expect.objectContaining({
    id: '03',
    name: 'acep'
  }));

  const issues2 = await request.get(`https://hls6g2z5h9.execute-api.ap-southeast-1.amazonaws.com/influencer/04`);
  expect(issues2.ok()).toBeTruthy();
  expect(await issues2.json()).toEqual(expect.objectContaining({
    id: '04',
    name: 'ujang',
  }));

  const issues3 = await request.get(`https://hls6g2z5h9.execute-api.ap-southeast-1.amazonaws.com/influencer/05`);
  expect(issues3.ok()).toBeTruthy();
  expect(await issues3.json()).toEqual(expect.objectContaining({
    id: '05',
    name: 'arif',
  }));
}
);

