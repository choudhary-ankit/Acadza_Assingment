import React from 'react';
import Style from './Backlogcontent.module.css'
import BuildIcon from '@material-ui/icons/Build';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions'
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';

const maincontent=()=>{
    return(
        <div className={Style.display_content}>
            <div className={Style.syllabus}>
                <p>Add Syllabus</p>
            </div>
            <div className={Style.subject_arrng}>
                <div className={Style.subject}>
                    <p>Physics</p>
                </div>
                <div className={Style.subject} style={{backgroundColor:" #6739b7", color:"white"}}>
                    <p>Chemistry</p>
                </div>
                <div className={Style.subject}>
                    <p>Math's</p>
                </div>
            </div>
            <div className={Style.subject_class}>
                <div className={Style.collapse_arrng}>
                    <lable>Chapters</lable>
                    <Accordion className={Style.collapse}>
                        <AccordionSummary 
                            className={Style.collapse_heading}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <p>choose a tag</p>
                        </AccordionSummary>
                        <div className={Style.collapse_content}>
                            <div className={Style.collapse_content_arrng}>
                                <div className={Style.collapse_content_sub}>
                                    <div className={Style.collapse_content_sub_div}>
                                        <p>Trignometry</p>
                                    </div>
                                    <div className={Style.checkbox_arrng}>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox 
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.collapse_content_sub}>
                                    <div className={Style.collapse_content_sub_div}>
                                        <p>Probablity</p>
                                    </div>
                                    <div>
                                        <div>
                                            <Checkbox
                                            style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                            style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                            style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                            style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                    </div>
                                </div>
                                <div className={Style.collapse_content_sub}>
                                    <div className={Style.collapse_content_sub_div}>
                                        <p>Progration</p>
                                    </div>
                                    <div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                            style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                            style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                            style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                        <div>
                                            <Checkbox
                                                defaultChecked
                                                style={{color:"#6739b7"}}
                                            />
                                            <spane>Chapters 1</spane>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Divider />
                        <AccordionActions>
                            <Button size="small">Clear</Button>
                            <Button size="small" color="primary">done</Button>
                        </AccordionActions>
                    </Accordion>
                </div>
                <div className={Style.collapse_arrng}>
                    <lable>Concepts</lable>
                    <select className={Style.option}style={{width:"250px"}}>
                        <option>choose a tag</option>
                    </select>
                </div>
                <div className={Style.collapse_arrng}>
                    <lable>Sub-Concepts</lable>
                    <select className={Style.option} style={{width:"250px"}}>
                        <option>choose a tag</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default maincontent;