import service from '@/utils/request'
//相关接口调用
//考试列表接口
export function examList(token) {
    return service({
        url: "student/exam",
        method: 'POST',
        params: {
            xauthToken: $.parseJSON(token).token,
            page: 0,
            rows: 1
        },
    })
}
//考试详情接口
export function examInfo(id, token) {
    return service({
        url: "mobile/exam/" + id + "",
        method: 'GET',
        params: {
            examId: id,
            xauthToken: $.parseJSON(token).token
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
//提交考试接口
export function submitExamPaper(submitData, token) {
    const data = submitData;
    console.log(data)
    return service({
        url: "mobile/exam/submit/0",
        method: 'POST',
        headers: {
            'xauthToken': $.parseJSON(token).token,
        },
        data
    })
}