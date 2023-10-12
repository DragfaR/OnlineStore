import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'Холодильник'},
            {id:2, name: 'Смартфоны'},
        ]
        this._brands = [
            {id:1, name:'Samsung'},
            {id:2, name: 'Apple'},
        ]
        this._devices = [
            {id:1, name: 'Iphone 12 pro', price: 25000, rating:5, img:'https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg'},
            {id:2, name: 'Iphone 13 mini', price: 25000, rating:5, img:'https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg'},
            {id:3, name: 'Iphone 7', price: 25000, rating:5, img:'https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg'},
            {id:4, name: 'Iphone 1', price: 25000, rating:5, img:'https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types () {
        return this._types
    }

    get brands () {
        return this._brands
    }

    get devices () {
        return this._devices
    }

    get isAuth () {
        return this._isAuth
    }

    get user () {
        return this._user
    }
}