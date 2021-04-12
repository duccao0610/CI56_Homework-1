export function randomAnswers(answers) {
    answers.sort(function () {
        return Math.random() - 0.5;
    })
}

export async function getDataApi(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
}
