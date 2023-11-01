import {makeAutoObservable} from "mobx";
import image1 from "./component.png"
import resistor from "../components/images/resistors.png";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'RESISTORS', img: resistor}, // Магия вот здесь прямо так же все сделал как ты сделал сам ниже в строке 21
            {id:2, name: 'CAPACITORS', img: "https://i.imgur.com/faO9rlv.png"},
            {id:3, name: 'INDUCTORS', img: "https://i.imgur.com/RprlvB5.png"},
            {id:4, name: 'PROCESSORS', img: "https://i.imgur.com/bOaT0Go.png"},
            {id:5, name: 'CONVERTERS', img: "https://i.imgur.com/0kojfEd.png"},
            {id:6, name: 'DIODES', img: "https://i.imgur.com/BNgl4nv.png"},
            {id:7, name: 'CONNECTORS', img: "https://i.imgur.com/wlrdgsH.png"},
            {id:8, name: 'ПОДОБРАТЬ ЧЕРЕЗ EXEL', img: "https://i.imgur.com/BxvAJr8.png"},
        ]
        this._brands = [
            {id:1, name:'Chipanalog'},
            {id:2, name: 'Apple'},
        ]
        this._devices = [
            {id:1, name: 'CA-IS3082WX', price: '127,2₽', rating:5, img: image1}, // типо как тут 
            {id:2, name: 'CA-IS3082WX', price: '127,2₽', rating:5, img: image1}, // и как тут 
            {id:3, name: 'CA-IS3082WX', price: '127,2₽', rating:5, img: image1},
            {id:4, name: 'CA-IS3082WX', price: '127,2₽', rating:5, img: image1},
            {id:5, name: 'CA-IS3082WX', price: '127,2₽', rating:5, img: image1},
        ]
        this._selectedType = {}
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

    setSelectedType(type) {
        this._selectedType = type
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

    get selectedType () {
        return this._selectedType
    }
}