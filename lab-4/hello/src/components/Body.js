import React from 'react'
import Title from './Title';
import Place from './Place';

const Shikaribetsu = {
    name: 'หมู่บ้านน้ำแข็งริมทะเลสาบ (Shikaribetsu Lake Village)',
    img: './img/Shikaribetsu1.jpg',
    discription: 'ทะเลสาบ Shikaribetsu ตั้งอยู่ในอุทยาน Daisetsu ช่วงฤดูหนาวทะเลสาบแห่งนี้จะกลายเป็นน้ำแข็งเป็นทิวทัศน์ที่สวยงามมาก แต่ความพิเศษของทะเลสาบแห่งนี้ในช่วงฤดูหนาวไม่ได้มีแค่นั้นเพราะที่นี่มีหมู่บ้านน้ำแข็งแบบชาวเอสกิโมอยู่ด้วย',
    address: 'Hokkaido Kato-gun Shikaoi-cho Shikaribetsu, Hokkaido, Japan'
}

const BluePond = {
    name: 'บ่อน้ำสีฟ้า (Blue Pond)',
    img: './img/BluePond1.jpg',
    discription: 'สีฟ้าที่สวยงามของน้ำในบ่อนี้เกิดจากการสร้างเขื่อนขึ้นในบริเวณนั้นเพื่อให้น้ำทั้งหมดถูกกักไว้ไม่ให้ออกจากบ่อจะได้ป้องกันการเกิดโคลนถล่มจากภูเขาไฟ อลูมิเนียมไฮดรอกไซด์จากการปะทุของภูเขาไฟแถวนั้นนั่นเองที่ทำให้น้ำในบ่อทั้งหมดกลายเป็นสีฟ้าเช่นนี้',
    address: 'Shirogane, Kamikawa-gun, Biei-cho 071-0235, Hokkaido, Japan'
}

const Body = () => {
    return (
        <div>
            <Title />
            <ol>
                <Place name={Shikaribetsu.name} img={Shikaribetsu.img} discription={Shikaribetsu.discription} address={Shikaribetsu.address}/>
                <Place name={BluePond.name} img={BluePond.img} discription={BluePond.discription} address={BluePond.address}/>
            </ol>
        </div>
    )
}

export default Body