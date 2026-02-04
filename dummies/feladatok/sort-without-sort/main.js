const movies = [
    {title: "Dark Knight", director: "Christopher Nolan", playtime: "152"},
    {title: "Shrek", director: "Vicky Jenson", playtime: "90"},
    {title: "Wall street farkasai", director: "Martin Scorese", playtime: "179"},
    {title: "F1", director: "Joseph Kosinski", playtime: "155"},
    {title: "Neon Horizon", director: "Ava Redding", playtime: "128"},
    {title: "The Last Orchard", director: "Hiroshi Tanaka", playtime: "102"},
    {title: "Vákuumváros", director: "Kovács Benedek", playtime: "141"},
    {title: "Silent Orbit", director: "Marcel Dupré", playtime: "116"},
    {title: "Crimson Alley", director: "Lena Hartmann", playtime: "134"},
    {title: "A Sivatag Hangjai", director: "Szabó Lilla", playtime: "97"},
    {title: "Iron Pulse", director: "Diego Montoya", playtime: "150"},
    {title: "Moonlit Echoes", director: "Sofia Laurent", playtime: "121"}

];
const abc = {
    "a": 1,"á": 2,"b": 3,"c": 4,"cs": 5,"d": 6,"dz": 7,"dzs": 8,"e": 9,"é": 10,"f": 11,"g": 12,"gy": 13,"h": 14,"i": 15,"í": 16,"j": 17,"k": 18,"l": 19,"ly": 20,"m": 21,"n": 22,"ny": 23,"o": 24,"ó": 25,"ö": 26,"ő": 27,"p": 28,"q": 29,"r": 30,"s": 31,"sz": 32,"t": 33,"ty": 34,"u": 35,"ú": 36,"ü": 37,"ű": 38,"v": 39,"w": 40,"x": 41,"y": 42,"z": 43,"zs": 44
};
let sorban = [0]

let values = [0]
for (let i = 0; i < movies.length; i++) {
    let abcIndex = abc[movies[i].title[0].toLowerCase()]
    for (let i2 = 0; i2 < values.length; i2++) {
        let currentValue = values[i2]
        let nextValue = values[i2+1] || 45
        if (abcIndex >= currentValue && abcIndex <= nextValue ) {
            var newValueIndex = i2+1
        }
    }
    values.splice(newValueIndex ,0, abcIndex)
    sorban.splice(newValueIndex ,0, movies[i].title)
}
sorban.splice(0,1)
console.log(sorban)
