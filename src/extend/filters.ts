const money: Function = (v: string|undefined) => {
    if (!v) {
        return '0.00'
    } else {
        return parseFloat(v).toFixed(2)
    }
}

const date: Function = (t: string|undefined) => {
    let nt
    if (!t) {
        nt = new Date()
    } else {
        nt = new Date(t);
    }
    return new Date(+nt + 288e5).toJSON().substr(0,10)
}

export {
    money,
    date
}