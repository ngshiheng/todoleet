import {
    DAILY_CODING_CHALLENGE_QUERY,
    LEETCODE_API_ENDPOINT,
    TODOIST_API_ENDPOINT,
} from './const'

/**
 * Sync LeetCode daily coding challenge to Todoist
 */
const syncLeetCodeCodingChallenge = async event => {
    const question = await fetchDailyCodingChallenge()
    createTodoistTask(question)
}

const fetchDailyCodingChallenge = async () => {
    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: DAILY_CODING_CHALLENGE_QUERY }),
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, init)
    return response.json()
}

const createTodoistTask = async question => {
    const questionTitle = question.data.activeDailyCodingChallengeQuestion.title
    const questionLink = `https://leetcode.com${question.data.activeDailyCodingChallengeQuestion.link}`

    const init = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TODOIST_API_ENDPOINT}`,
        },
        body: {
            content: `[${questionTitle}](${questionLink})`,
            due_string: 'Today',
        },
    }

    const response = await fetch(LEETCODE_API_ENDPOINT, init)
    return response.json()
}

addEventListener('scheduled', event => {
    event.waitUntil(syncLeetCodeCodingChallenge(event))
})
