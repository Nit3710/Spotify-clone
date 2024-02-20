import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { Playlist } from './PlayList';
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
const MenuPlaylist = () => {
    return (
        <div className='playListContainer'>
            <div className="nameContainer">
                <p>Playlist</p>
                <i><FaPlus /></i>
            </div>
            <div className="playListScroll">
                {
                    Playlist && Playlist.map((list) => (
                        <div className="playList"key={list.id}>
                            <i className='list'><BsMusicNoteList /></i>
                            <p>{list.name}</p>
                            <i className='trash'><BsTrash /></i>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export { MenuPlaylist }
