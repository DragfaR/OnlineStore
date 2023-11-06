import datas from './Photos.json';
export class PhotoService {
    getImages() {
        const results1 = [];
        datas.map((datas) => {
            results1.push(datas)
        });
        return results1;
    }
}