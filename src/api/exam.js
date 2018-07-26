import service from '@/utils/request'
//相关接口调用
//考试列表接口
export function examList(token) {
    return service({
        url: "mobile/exam/list",
        method: 'GET'
    })
}
//考试详情接口
export function examInfo(id, token) {
    return service({
        url: "mobile/exam/" + id + "",
        method: 'GET'
    })
}
//考题生成接口
export function createExamPaper(id) {
    return service({
        url: "mobile/exam/start/"+id+"",
        method: 'GET'
    })
}
//提交考试接口
export function submitExamPaper(submitData, token) {
    const data = submitData;
    return service({
        url: "mobile/exam/submit/0",
        method: 'POST',
        data
    })
}
//用户考试状态
export function userStudy(id, token) {
    return service({
        url: "/mobile/course/status/" + id + "",
        method: 'GET',
        params: {
            'courseId': id
        }
    })
}
