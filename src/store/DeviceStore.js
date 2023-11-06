import {makeAutoObservable} from "mobx"
import image1 from "./component.png"
import resistor from "../components/images/resistors.png"
import capacitors from "../components/images/capacitors.png"
import connectors from "../components/images/connectors.png"
import converters from "../components/images/converters.png"
import diodes from "../components/images/diodes.png"
import exel from "../components/images/exel.png"
import inductors from "../components/images/inductors.png"
import processors from "../components/images/processors.png"

export default class DeviceStore {
    constructor() {
        this._types = [
            {id:1, name: 'RESISTORS', img: resistor},
            {id:2, name: 'CAPACITORS', img: capacitors},
            {id:3, name: 'INDUCTORS', img: inductors},
            {id:4, name: 'PROCESSORS', img: processors},
            {id:5, name: 'CONVERTERS', img: converters},
            {id:6, name: 'DIODES', img: diodes},
            {id:7, name: 'CONNECTORS', img: connectors},
            {id:8, name: 'ПОДОБРАТЬ ЧЕРЕЗ EXEL', img: exel},
        ]
        this._brands = [
            {id:1, name:'Chipanalog'},
            {id:2, name: 'Apple'},
        ]
        this._devices = [
            {id:1, name: 'CA-IS3082WX', price: '127,2₽', rating:5, img: image1},
            {id:2, name: 'CA-IS3082WX', price: '127,2₽', rating:5, img: image1},
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