import service from '@/utils/request'
//相关接口调用
export function coursePDF(id) {
    return service({
        url: "mobile/course/getCourseFileInfo/" + id + "",
        method: 'GET'
    })
}

export function getPDFFile(url){
    return service({
        url: 'mobile/course/operation/readFile'+url,
        method: 'GET'
    })
}

 
