---
title: Contact
permalink: "/contact"
layout: page
comments: false
bg_color: efe
color: 93ff7c
---

<form netlify method="POST">    
<p class="mb-4">Please send your message, complients and errors to {{site.name}}. We will reply as soon as possible!💖</p>
<div class="form-group row">
<div class="col-md-6">
<label class="label-contributor" for="first-name">👦Full Name
<input class="form-control" type="text" name="name" placeholder="Name*" required>
</label>
</div>
<div class="col-md-6">
<label class="label-contributor" for="first-name">💌E-mail
<input class="form-control" type="email" name="_replyto" placeholder="E-mail Address*" required>
</label>
</div>
</div>
<label class="label-contributor" for="first-name">📝Message
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Message*" required></textarea>
</label>
<input class="btn" value="Send 👉" type="submit" style="color: #{{page.bg_color}};background: #{{page.color}};border-radius:7px;border-color:transparent;font-weight:700;">
</form>
