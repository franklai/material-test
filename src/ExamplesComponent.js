import React from 'react';

const divStyle = {
    width: '90%',
    margin: '20px auto',
};

const links = [
    {name: 'うたまっぷ', url: 'http://www.utamap.com/showkasi.php?surl=70380'},
];

class Links extends React.Component {
    handleLinkClick(e, url) {
        console.log('url:', url);
        e.preventDefault();
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
                        <dd><a href="{url}" target="_blank" onClick={(e) => this.handleLinkClick(e, url)}>{url}</a></dd>,
                    ]
                )
            }
            </dl>
        );
    }
}

class ExamplesComponent extends React.Component {
    handleLinkClick(e) {
    }
    render() {
        return (
            <div style={divStyle}>
                <Links links={links} />
            </div>
        );
    }
}
/**
                    <dt>あにまっぷ</dt>
                    <dd><a href="http://www.animap.jp/kasi/showkasi.php?surl=dk101202_50" target="_blank">http://www.animap.jp/kasi/showkasi.php?surl=dk101202_50</a></dd>
                    <dt>Uta-Net</dt>
                    <dd><a href="http://www.uta-net.com/song/17248/" target="_blank">http://www.uta-net.com/song/17248/</a></dd>
                    <dt>歌詞タイム</dt>
                    <dd><a href="http://www.kasi-time.com/item-262.html" target="_blank">http://www.kasi-time.com/item-262.html</a></dd>
                    <dt>歌詞ナビ</dt>
                    <dd><a href="http://kashinavi.com/song_view.html?65545" target="_blank">http://kashinavi.com/song_view.html?65545</a></dd>
                    <dt>歌詞GET</dt>
                    <dd><a href="http://www.kget.jp/lyric/11066/" target="_blank">http://www.kget.jp/lyric/11066/</a></dd>
                    <dt>GyaO! 歌詞サービス</dt>
                    <dd><a href="http://lyrics.gyao.yahoo.co.jp/ly/Y152097/" target="_blank">http://lyrics.gyao.yahoo.co.jp/ly/Y152097/</a></dd>
                    <dt>イベスタ歌詞とる</dt>
                    <dd><a href="http://www.evesta.jp/lyric/artists/a10019/lyrics/l7811.html" target="_blank">http://www.evesta.jp/lyric/artists/a10019/lyrics/l7811.html</a></dd>
                    <dt>アニメソングの歌詞ならここにおまかせ？</dt>
                    <dd><a href="http://www.jtw.zaq.ne.jp/animesong/ra/rahxephontagen/tune.html" target="_blank">http://www.jtw.zaq.ne.jp/animesong/ra/rahxephontagen/tune.html</a></dd>
                    <dt>UtaTen</dt>
                    <dd><a href="http://utaten.com/lyric/BUMP+OF+CHICKEN/beautiful+glider/" target="_blank">http://utaten.com/lyric/BUMP+OF+CHICKEN/beautiful+glider/</a></dd>
                    <dt>JOYSOUND.com</dt>
                    <dd><a href="https://www.joysound.com/web/search/song/26613" target="_blank">https://www.joysound.com/web/search/song/26613</a></dd>
                    <dt>music.jp</dt>
                    <dd><a href="http://music-book.jp/music/Kashi/aaa0k3wa?artistname=%25e5%25ae%2589%25e5%25ae%25a4%25e5%25a5%2588%25e7%25be%258e%25e6%2581%25b5&title=Love%2520Story&packageName=Sit!%2520Stay!%2520Wait!%2520Down!%252fLove%2520Story" target="_blank">http://music-book.jp/music/Kashi/aaa0k3wa?...</a></dd>
                    <dt>J-Lyric.net</dt>
                    <dd><a href="http://j-lyric.net/artist/a002723/l001e83.html" target="_blank">http://j-lyric.net/artist/a002723/l001e83.html</a></dd>
                    <dt>J-Total Music</dt>
                    <dd><a href="http://music.j-total.net/data/026ha/053_Perfume/038.html" target="_blank">http://music.j-total.net/data/026ha/053_Perfume/038.html</a></dd>
                    <dt>アニ歌詞PV</dt>
                    <dd><a href="http://animationsong.com/archives/1800903.html" target="_blank">http://animationsong.com/archives/1800903.html</a></dd>
                    <dt>JP歌詞</dt>
                    <dd><a href="http://jplyrics.com/j-pop-lyrics/akino-kaishoku-pv-kasi-full-mv.html" target="_blank">http://jplyrics.com/j-pop-lyrics/akino-kaishoku-pv-kasi-full-mv.html</a></dd>
                    <dt>LyricWiki</dt>
                    <dd><a href="http://lyrics.wikia.com/Ronan_Keating:When_You_Say_Nothing_At_All" target="_blank">http://lyrics.wikia.com/Ronan_Keating:When_You_Say_Nothing_At_All</a></dd>
                    <dt>metrolyrics</dt>
                    <dd><a href="http://www.metrolyrics.com/we-belong-together-lyrics-mariah-carey.html" target="_blank">http://www.metrolyrics.com/we-belong-together-lyrics-mariah-carey.html</a></dd>
                    <dt>songtexte</dt>
                    <dd><a href="http://www.songtexte.com/songtext/taylor-swift/begin-again-63a6de47.html" target="_blank">http://www.songtexte.com/songtext/taylor-swift/begin-again-63a6de47.html</a></dd>
*/

export default ExamplesComponent;
