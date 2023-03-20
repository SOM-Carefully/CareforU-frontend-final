import Add_post from "../post/Add_post";
import React from 'react';

function Add_notice(props) {
    return (
        <div>
            <Add_post header_title="NOTICE" fetch_url="http://54.180.210.232:80/api/v1/notices" after_page="/notice_list" token="eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbUBhZG1pbi5jb20iLCJhdXRoIjoiUk9MRV9BRE1JTiIsImV4cCI6MTY3MzY4NTUwOH0.R2H69kw81vm5O_xOcxG_HvDwZKPM4yP-bktYJiaJ7SoVqeDrf-fSGgo1Lt4ddbNj0JqdE3tNOqCHbsgkn1R7yQ" /></div>

    );
}

export default Add_notice;
