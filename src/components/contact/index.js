function ContactForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="message">message:</label>
          <input type="text" name="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
