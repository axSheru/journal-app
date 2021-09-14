export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'In culpa sunt proident nulla dolor commodo velit mollit minim.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Laboris quis aliquip ipsum ipsum anim qui.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Ad et aliqua dolor sit eiusmod elit.',
            picture: null
        },
    ]
})