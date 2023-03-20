import Board_lists from "../post/Board_lists";
import React from 'react';

function Notice_list() {
    return (
        <div>
            <Board_lists header_title="NOTICE" fetch_url="http://54.180.210.232:80/api/v1/notices?role=NOTICE&page=0" detail="notice" add_btn="/add_notice" />
        </div>
    );
}
export default Notice_list;
