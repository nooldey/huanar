const handleErr = (err: any) => {
    if (!err) {
        return 'error'
    }
    let e = JSON.parse(JSON.stringify(err))
    let errmap = {
        '1': '服务器内部错误或者参数错误',
        '100': '无法建立 TCP 连接到 LeanCloud 服务器',
        '101': '查询对象不存在',
        '103': '非法的 Class 名称'
    }
    let toast = (<any>errmap)[e.code] || '请求失败'
    alert(toast)
}

export { handleErr }