import React from 'react'
import Sample from './Sample.jpg'

export default function Item(props) {
    return (
        <div className="mb-3">
            <div className="card " style={window.innerWidth > 991 ? { height: "450px" } : {}}>
                <img
                    src={props.img}
                    className="card-img-top"
                    alt="thumbnail"
                    style={window.innerWidth > 991 ? { height: "15vw" } : {}}
                    onError={(event) => { event.target.src = Sample; }}
                />
                <div className="card-body" style={{ position: "relative" }}>
                    <h5 className="card-title" style={{ wordBreak: "break-all" }}>{window.innerWidth > 991 ? props.title.slice(0, 85)+"..." : props.title}</h5>
                    <p className="card-text mb-1">{props.description === null || props.description === "" ? `${props.title.slice(0, 80)}...` : `${props.description.slice(0, 80)}...`}</p>
                    <p className="card-text my-2" style={window.innerWidth > 1280 ? { position: "absolute", bottom: "0" } : {}}>{(props.publishedat).slice(0, 10) + " UTC " + (props.publishedat).slice(11, 19)}</p>
                    <a href={props.url} className="btn btn-sm btn-danger mb-2 mx-2" target="_blank" rel="noopener noreferrer" style={window.innerWidth > 767 ? { position: "absolute", bottom: "0", right: "0" } : {}}>Read More</a>
                </div>
            </div>
        </div >
    )
}
