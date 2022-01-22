import {
    DAILY_CODING_CHALLENGE_QUERY,
    LEETCODE_API_ENDPOINT,
    TODOIST_API_ENDPOINT,
} from './const'

/**
 * Sync LeetCode daily coding challenge to Todoist
 */
const syncLeetCodeCodingChallenge = async (event) => {
    const question = await fetchDailyCodingChallenge()
    await createTodoistTask(question)
}

const fetchDailyCodingChallenge = async () => {
    console.log(`Fetching daily coding challenge from LeetCode API.`)

    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY }),
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, init)
    return response.json()
}

const createTodoistTask = async (question) => {
    const questionInfo = question.data.activeDailyCodingChallengeQuestion

    const questionTitle = questionInfo.question.title
    const questionDifficulty = questionInfo.question.difficulty
    const questionLink = `https://leetcode.com${questionInfo.link}`

    console.log(`Creating Todoist task with title ${questionTitle}.`)

    const body = {
        content: `[${questionTitle}](${questionLink})`,
        description: `Difficulty: ${questionDifficulty}`,
        due_string: 'Today',
        priority: 4,
    }

    const init = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TODOIST_API_TOKEN}`,
        },
    }

    const response = await fetch(`${TODOIST_API_ENDPOINT}/tasks`, init)
    return response.json()
}

addEventListener('scheduled', (event) => {
    event.waitUntil(syncLeetCodeCodingChallenge(event))
})
