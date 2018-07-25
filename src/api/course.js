import service from '@/utils/request'
//相关接口调用
export function coursePDF(id, token) {
    return service({
        url: "mobile/course/getCourseFileInfo/" + id + "",
        method: 'GET',
        params: {
            xauthToken: $.parseJSON(token).token,
            courseId: id
        },
    })
}
