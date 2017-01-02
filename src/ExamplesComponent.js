import React from 'react';

const divStyle = {
    width: '90%',
    margin: '20px auto',
};

const links = [
    {name: 'うたまっぷ', url: 'http://www.utamap.com/showkasi.php?surl=70380'},
    {name: 'あにまっぷ', url: 'http://www.animap.jp/kasi/showkasi.php?surl=dk101202_50'},
    {name: 'Uta-Net', url: 'http://www.uta-net.com/song/17248/'},
    {name: '歌詞タイム', url: 'http://www.kasi-time.com/item-262.html'},
    {name: '歌詞ナビ', url: 'http://kashinavi.com/song_view.html?65545'},
    {name: '歌詞GET', url: 'http://www.kget.jp/lyric/11066/'},
    {name: 'GyaO! 歌詞サービス', url: 'http://lyrics.gyao.yahoo.co.jp/ly/Y152097/'},
    {name: 'イベスタ歌詞とる', url: 'http://www.evesta.jp/lyric/artists/a10019/lyrics/l7811.html'},
    {name: 'アニメソングの歌詞ならここにおまかせ？', url: 'http://www.jtw.zaq.ne.jp/animesong/ra/rahxephontagen/tune.html'},
    {name: 'UtaTen', url: 'http://utaten.com/lyric/BUMP+OF+CHICKEN/beautiful+glider/'},
    {name: 'JOYSOUND.com', url: 'https://www.joysound.com/web/search/song/26613'},
    {name: 'music.jp', url: 'http://music-book.jp/music/Kashi/aaa4nrwp?artistname=Perfume&title=FLASH%2520(Album-mix)'},
    {name: 'J-Lyric.net', url: 'http://j-lyric.net/artist/a002723/l001e83.html'},
    {name: 'J-Total Music', url: 'http://music.j-total.net/data/026ha/053_Perfume/038.html'},
    {name: 'アニ歌詞PV', url: 'http://animationsong.com/archives/1800903.html'},
    {name: 'JP歌詞', url: 'http://jplyrics.com/j-pop-lyrics/akino-kaishoku-pv-kasi-full-mv.html'},
    {name: 'LyricWiki', url: 'http://lyrics.wikia.com/Ronan_Keating:When_You_Say_Nothing_At_All'},
    {name: 'metrolyrics', url: 'http://www.metrolyrics.com/we-belong-together-lyrics-mariah-carey.html'},
    {name: 'songtexte', url: 'http://www.songtexte.com/songtext/taylor-swift/begin-again-63a6de47.html'},
];

class Links extends React.Component {
    handleLinkClick(e, url) {
        const setUrl = this.props.setUrl;
        console.log('url:', url);
        e.preventDefault();
        setUrl(url);
        return false;
    }

    render() {
        const links = this.props.links;
        return (
            <dl>
            {
                links.map(({name, url}) =>
                    [
                        <dt>{name}</dt>,
                        <dd><a href={url} target="_blank" onClick={(e) => this.handleLinkClick(e, url)}>{url}</a></dd>,
                    ]
                )
            }
            </dl>
        );
    }
}

class ExamplesComponent extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <Links links={links} setUrl={this.props.setUrl} />
            </div>
        );
    }
}

export default ExamplesComponent;
