let handler = async (m, {
    conn,
    text,
    args,
    usedPrefix,
    command
}) => {
    // Split the message text using the '|' character and slice the array to remove the first element.
    let a = text.split("|").slice(1)
    if (!a[1]) throw "اكتب\n" + usedPrefix + command + " تحبوني |نعم|لا"
    if (a[12]) throw "خيارات كثيره جدا, للاستخدام اكتب كذا\n" + usedPrefix + command + " تحبوني |نعم|لا"
    // Check for duplicate options in the poll.
    if (checkDuplicate(a)) throw "لا تكرر الخيارات"
    let cap = "*التصويت بواسطه* " + m.name + "\n*الرساله:* " + text.split("|")[0]

   
    const pollMessage = {
        name: cap,
        values: a,
        multiselect: false,
        selectableCount: 1
    }
  
    await conn.sendMessage(m.chat, {
        poll: pollMessage
    })
}

handler.help = ["poll question|option|option"]
handler.tags = ["group"]
handler.command = /^(تصويت)$/i

export default handler

// Function to check for duplicate elements in an array.
function checkDuplicate(arr) {
    return new Set(arr).size !== arr.length
}
