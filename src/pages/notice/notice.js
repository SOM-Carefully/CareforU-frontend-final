import Post from "../post/post";
import React from 'react';

function Notice() {
    return (
        <div>
            <Post header_title="NOTICE" fetch_url="http://54.180.210.232:80/api/v1/posts?role=NOTICE&page=0" />
        </div>


    );
}
export default Notice;
