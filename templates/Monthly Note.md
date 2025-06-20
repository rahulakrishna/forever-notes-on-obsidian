[[<% "Years/" + moment(tp.file.title, "YYYY MMMM").format("YYYY") %> |<% moment(tp.file.title, "YYYY MMMM").format("YYYY") %>]] | [Today](obsidian://daily) | [[<% 'Months/' + moment(tp.file.title, "YYYY MMMM").subtract(1, 'months').format("YYYY MMMM") %> |← <% moment(tp.file.title, "YYYY MMMM").subtract(1, 'months').format("MMMM")%>]] | [[<% 'Months/' + moment(tp.file.title, "YYYY MMMM").add(1, 'months').format("YYYY MMMM") %> |<% moment(tp.file.title, "YYYY MMMM").add(1, 'months').format("MMMM")%> →]]

### 📅 Weeks
---
<% tp.user.insertWeeksOfMonth(tp) %>

### 📆 Days
---
<% tp.user.insertDays(tp) %>

## 🌱 Planning
---

## 🌺 Retro
---
### 🕰️ Time Doctor
---

## 📚 Books of <% moment(tp.file.title, "YYYY MMM").format("MMMM") %>
---

### 🏞️ Memories of <% moment(tp.file.title, "YYYY MMM").format("MMMM") %>
---
-
