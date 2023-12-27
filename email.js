<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  var mailtoLink = 'mailto:Ayman@awengineers.com.au?subject=Contact from ' + name + '&body=' + encodeURIComponent(message + '\n\nReply to: ' + email);

  window.location.href = mailtoLink;
});
</script>

