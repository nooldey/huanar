import errmap from './error_code'

const handleErr = (err: any) => {
    if (!err) {
        return 'error'
    }
    let e = JSON.parse(JSON.stringify(err))
    let toast = (<any>errmap)[e.code] || '请求失败'
    alert(toast)
}

export { handleErr }