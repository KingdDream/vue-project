
import {get, post} from './http'
import * as Data from './data'

// function mock(data) {
//     return new Promise((resolve, reject) => {
//         resolve({code: '1', data: data, msg: 'success'})
//     })
// }

export const apiUrl = {
    mock,
    // demo
    demo: p => post('/CockpitMobile/ExposureListStore', p)
}
