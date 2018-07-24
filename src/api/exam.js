import service from '@/utils/request'
//相关接口调用
//考试详情接口
export function examInfo(id, token) {
    return service({
        url: "mobile/exam/" + id + "",
        method: 'GET',
        params: {
            examId: id,
            xauthToken: token
        },
    })
}
//考题生成接口
export function createExamPaper(id, token) {
    return service({
        url: "mobile/exam/start/" + id + "",
        method: 'GET',
        params: {
            examId: id
        },
        headers: {
            'xauthToken': $.parseJSON(token).token,
        }
    })
}