$jqOpta.trn_F24 = function (a, f, l) {
    var d = $jqOpta.getSportId(f.params.sport), e = f.params.season, c, g = new $jqOpta.Deferred, h = new $jqOpta.Deferred;
    new $jqOpta.Deferred;
    var k = function () {
        var b = $jqOpta.trans.comp(d, e, c, a.Games.Game["@attributes"].competition_name);
        a.Games.Game["@attributes"].competition_name = b.full;
        a.Games.Game["@attributes"].compObj = b;
        g.resolve()
    };
    a.SoccerFeed && (a.OptaFeed = {}, a.OptaFeed = a.SoccerFeed, delete a.SoccerFeed);
    c = a.Games.Game["@attributes"].competition_id;
    void 0 === f.trn.comps || f.trn.comps[c] ?
        $jqOpta.trans.load.comps(d, e, k) : k();
    $jqOpta.trans.load.teams(d, e, c, function () {
        var b;
        b = $jqOpta.trans.team(d, e, c, a.Games.Game["@attributes"].home_team_id, a.Games.Game["@attributes"].home_team_name);
        a.Games.Game["@attributes"].home_team_name = b.name;
        a.Games.Game["@attributes"].homeNameObj = b;
        b = $jqOpta.trans.team(d, e, c, a.Games.Game["@attributes"].away_team_id, a.Games.Game["@attributes"].away_team_name);
        a.Games.Game["@attributes"].away_team_name = b.name;
        a.Games.Game["@attributes"].awayNameObj = b;
        h.resolve()
    });
    $jqOpta.when(g, h).then(function () {
        l(a)
    })
};