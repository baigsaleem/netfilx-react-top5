import React from 'react';
import Card from './Card';
import './App.css';
import NavBar from './NavBar';

function App() {
    return (
        <>
            <NavBar />
            <Card imgSrc="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR4qjNIksGXAbvmta4i-LMo5Jal6-ztG8FVimXo7wBHvA9uw8sqDFuQ62hDKjt5ulcTOPILjuPgnPxhfwCg1msWEJJgFUgc2RFK5BHjl0NQhHm1Eobdb26NGjXrZaEvTXs9SXb_No9jKVXCruU1TYlpXmKqiJAs.jpg"
                title="A Netflix Original Series"
                sname="DARK" link="https://www.netflix.com/pk/title/80100172" target="_blank" />
            <Card imgSrc="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZfj3AT25X5O0h3mw_EO2YLPxctxuC_o4rOD8URUJxSKFHcZEkEWkBzPEax2_9PRPUWe55wQMnaOubMBJByD-XPImrLfHOOD8B2-ulS7frSlz04CMPmlVJFMDh6Cmw.jpg"
                title="A Netflix Original Series"
                sname="Extra Curricular" link="https://www.netflix.com/pk/title/80990668" target="_blank" />
            <Card imgSrc="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABTCRHQoanH5M86BeYHJDPlLPOhT0Z85D0m0CCPM4JVNtiHT4zSwJiEpyqtzctJRTc_bdlFZ5HrwYrlNP3MChri5YrJn48P4oVKsHps8uD3SPS_pWl4P__5OAORLp0fpaaCgxNpHyoHEQJaQTIlgGqw.jpg"
                title="A Netflix Original Series"
                sname="Stranger Things" link="https://www.netflix.com/pk/title/80057281" target="_blank" />
            <Card imgSrc="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABemUFIQksgwOxG1UZfxZ2rcOpAo_cGc3h8CkWvoe7Ia360WnEKLIPP5VjJ5cobOxwF6tSJ7ieFBzQA7VYSPTrtjnbBxCsf0WJ06KrrYo-r8DJHp_XBkrKatPnV3azQAygyoIR_35C9P6TE0uuMXvon9xTdxa4lU.jpg"
                title="A Netflix Original Series"
                sname="Sacred Games" link="https://www.netflix.com/pk/title/80115328" target="_blank" />
            <Card imgSrc="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABSqzzi5NHlCbUuvwL8QkDudQ9Zl1D-_4Iga1zOly0IPAs-DzYbmRA90bz_wrsIMlPVGqN1YgtL995trzu1R8XZL07Y61d2GaLbeivrAS91FB1EHhNDX5JDAgXAjv0A.jpg"
                title="A Netflix Original Series"
                sname="The Witcher" link="https://www.netflix.com/pk/title/80189685" target="_blank" />
        </>
    )
}

export default App;