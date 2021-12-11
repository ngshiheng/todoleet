const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql'
const TODOIST_API_ENDPOINT = 'https://api.todoist.com/rest/v1'

addEventListener('scheduled', event => {
    event.waitUntil(syncLeetCodeCodingChallenge(event))
})

const fetchDailyCodingChallenge = async () => {}

const syncLeetCodeCodingChallenge = async event => {}

const createTodoistTask = async () => {}
