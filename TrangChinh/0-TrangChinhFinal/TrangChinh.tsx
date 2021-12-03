import React from 'react'

import './TrangChinh.css'

import TopBar from '../TopBar/topbar'
import SideBar from '../Sidebar/Sidebar'

import TrangDashBoard from '../1-DashBoard/DashBoardFinal/DashBoardFinal'
import TrangGSM from '../2-GSM/GSMFinal/GSM'
import TrangQLCB from '../3-QuanLyCanhBao/QLCBFinal/QLCBFinal'
import TrangBTCPGD from '../4-BaoCaoTheoPGD/BCTPGDFinal/BCTPGDFinal'
import TrangBCTATM from '../5-BaoCaoTheoATM/BCATM/BCATM'
import TrangQTC from '../6-QuyenTruyCap/QTCFinal/QTCFinal'


export default function TrangChinh() {
    return(
        <div className="bgTrangChinh">
            <TopBar/>
            <SideBar/>
        </div>
            
    );
}