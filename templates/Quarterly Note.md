[[<% "Years/" + moment(tp.file.title, "YYYY [Q]Q").format("YYYY") %> |<% moment(tp.file.title, "YYYY [Q]Q").format("YYYY") %>]] | [Today](obsidian://daily) | [[<% 'Quarters/' + moment(tp.file.title, "YYYY [Q]Q").subtract(1, 'quarters').format("[Q]Q") %> |← <% moment(tp.file.title, "YYYY [Q]Q").subtract(1, 'quarters').format("[Q]Q YYYY")%>]] | [[<% 'Quarters/' + moment(tp.file.title, "YYYY [Q]Q").add(1, 'quarters').format("[Q]Q") %> |<% moment(tp.file.title, "YYYY [Q]Q").add(1, 'quarters').format("[Q]Q YYYY")%> →]]

### 📆 Months
---
<% tp.user.insertMonthsInQuarter(tp) %>
