// NetPositive is a web browser for the BeOS operating system.
// It's famous for its haiku error messages.
// https://8325.org/haiku/

var haiku = [
    `The web site you seek,<br/>
    Lies beyond our perception<br/>
    But others await.`,
    `Click exciting link,<br/>
    Gossamer threads hold you back<br/>
    404 not found.`,
    `With searching comes loss<br/>
    And the presence of absence:<br/>
    The site is not found.`,
    `There is a chasm<br/>
    Of carbon and silicon<br/>
    The server can't bridge.`,
    `Visit the home page<br/>
    It can't be done easily<br/>
    When the site is down.`,
    `The ten thousand things<br/>
    How long do any persist?<br/>
    The file, not there.`,
    `Error reduces<br/>
    Your expensive computer<br/>
    To a simple stone.`,
    `Chaos reigns within.<br/>
    Reflect, repent, and retry.<br/>
    Server shall return.`,
    `Cables have been cut<br/>
    Southwest of Northeast somewhere<br/>
    We are not amused.`,
    `A file that big?<br/>
    It might be very useful<br/>
    But now it is gone.`,
    `Mourning and sorrow<br/>
    404 not with us now<br/>
    Lost to paradise.`,
    `Rather than a beep<br/>
    Or a rude error message,<br/>
    These words: 'Site not found.'`,
    `To have no errors<br/>
    Would be life without meaning<br/>
    No struggle, no joy`,
    `Wind catches lily<br/>
    Scatt'ring petals to the wind:<br/>
    Your site is not found.`,
    `Not a pretty sight<br/>
    When the web dies screaming loud<br/>
    The site is not found.`,
    `Something you entered<br/>
    Transcended parameters.<br/>
    The site is unknown.`,
    `Errors have occurred.<br/>
    We won't tell you where or why.<br/>
    Lazy programmers.`,
    `These three are certain:<br/>
    Death, taxes, and site not found.<br/>
    You, victim of one.`,
    `Click exciting link<br/>
    Gossamer threads hold you back<br/>
    404 not found.`,
    `Yesterday it worked<br/>
    Today it is not working<br/>
    The web is like that.`,
    `The code was willing<br/>
    It considered your request,<br/>
    But the chips were weak.`
  ];

  document.getElementById('randomHaiku').innerHTML = haiku[Math.floor(Math.random()*haiku.length)];