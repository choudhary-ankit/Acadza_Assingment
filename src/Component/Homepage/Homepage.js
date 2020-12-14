import React, { Component } from 'react'
import Style from './Homepage.module.css'
import BuildIcon from '@material-ui/icons/Build';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Backlogcontent from '../Pagecontent/Backlogpage/Backlogcontent'
import Dashboardmenu from '../../Staticdata/Dashboardmenu/Dashboardmenu';
import Dashboard from '../Pagecontent/Dashboard/Dashboeard'
import Mentorship from '../Pagecontent/Mentorship/Mentorshio'
import Doubtresolve from '../Pagecontent/Doubtresolve/Doubtresolve'
import Remedy from '../Pagecontent/Remedy/Remedy'
import Assingmentcreater from '../Pagecontent/Assingmentcreater/Assingmentcreater'
import Trackingtool from '../Pagecontent/Trackingtool/Trackingtool'
import Material from '../Pagecontent/Materialstore/Material'
import Testcreater from '../Pagecontent/Testcreater/Testcreater'

export default class Homepage extends Component {
    constructor(props){
        super(props)
        this.state={
            displayContent:0,
            
        }
    }
    changeContent=(e)=>{
        this.setState({
            displayContent:e
        })
    }
    render() {
        return (
            <div className={Style.body}>
                <div className={Style.sidebar}>
                    <p>LOGO</p>
                    <div className={Style.tools}>
                        <div className={Style.tools_arrng}>
                            <BuildIcon/>
                            <p>Tools</p>
                        </div>
                    </div>
                    <div className={Style.menu_aarng}>
                        {
                            Dashboardmenu.map((e)=>{
                                return(
                                    <div  className={this.state.displayContent==e.id? Style.menu_change: Style.menu} 
                                     onClick={()=>this.changeContent(e.id)}>
                                        <div className={Style.menu_context}>
                                            <img src={e.img} className={Style.icon_size}></img>
                                            <p>{e.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={Style.pagecontent}>
                    <div className={Style.topcontainer}>
                        <div className={Style.option_arrng}>
                            <div className={Style.option}>
                                <select className={Style.select}>
                                    <option>Activity</option>
                                </select>
                                <select className={Style.select}>
                                    <option>Tool Guide</option>
                                </select>
                            </div>
                        </div>
                        <div className={Style.search_option}>
                            <div className={Style.search}>
                                <div className={Style.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <div>
                                    <input placeholder="Search" className={Style.input_box}/>
                                </div>
                            </div>
                            <div className={Style.notification}>
                                <div className={Style.notification_arrng}>
                                    <NotificationsNoneIcon style={{width:"40px", height:"40px"}}/>
                                    <Avatar alt="Remy Sharp" src="./men.jpg" />
                                    <select className={Style.select}>
                                        <em>hl</em>    
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.displayContent===1?
                            <Dashboard/>
                            :
                            this.state.displayContent===2?
                            <Mentorship/>
                            :
                            this.state.displayContent===3?
                            <Doubtresolve/>
                            :
                            this.state.displayContent===4?
                            <Remedy/>
                            :
                            this.state.displayContent===5?
                            <Assingmentcreater/>
                            :
                            this.state.displayContent===6?
                            <Trackingtool/>
                            :
                            this.state.displayContent===7?
                            <Backlogcontent/>
                            :
                            this.state.displayContent===8?
                            <Material/>
                            :
                            this.state.displayContent===9?
                            <Testcreater/>
                            :
                            <div className={Style.welcome}>
                                <h1>Welcome To Acadza</h1>
                                <h5>I will help you for JEE Prepration</h5>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}
