import {FC} from "react";
import {IAlbums} from "../../types/albums";
// @ts-ignore
import styles from "./Albums.module.css"
// @ts-ignore
import albumimg from "../../img/album.png"

interface AlbumsProfileProps {
    albums: IAlbums[] | null
}

const AlbumsProfile: FC<AlbumsProfileProps> = ({albums}) => {
    return (
        <div className={styles.albums_wrapper}>
            <h4>
                Albums
            </h4>

            <div className={styles.albums}>
                {albums?.map(album =>
                    <div key={album.id} className={styles.item}>
                        <img src={albumimg} alt={"Album"}/>
                        <span>{album.title}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AlbumsProfile