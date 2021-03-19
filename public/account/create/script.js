function validPassword(password) {//run checks on what we want and don't
    if (password.length < 8) return "length"
    if (!password.match(".*[a-z].*")) return "lower"
    if (!password.match(".*[A-Z].*")) return "upper"
    if (!password.match(".*[0-9].*")) return "number"
    //if (password.match(".*[ ].*")) return "space"
    return "none";
}