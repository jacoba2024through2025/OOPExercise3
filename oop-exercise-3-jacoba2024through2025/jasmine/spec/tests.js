describe('Book and Ebook Classes', () => {
    let originalConsoleLog;

    beforeEach(() => {
        // Store the original console.log method
        originalConsoleLog = console.log;
        // Replace console.log with a spy to capture log messages
        spyOn(console, 'log').and.callThrough();
    });

    afterEach(() => {
        // Restore the original console.log method after each test
        console.log = originalConsoleLog;
    });

    it('should display details of a Book', () => {
        // Arrange
        const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

        // Act
        book.displayDetails();

        // Assert
        expect(console.log).toHaveBeenCalledWith('Title: The Great Gatsby');
        expect(console.log).toHaveBeenCalledWith('Author: F. Scott Fitzgerald');
        expect(console.log).toHaveBeenCalledWith('Publication Year: 1925');
    });

    it('should display details of an Ebook', () => {
        // Arrange
        const ebook = new Ebook('Design Patterns', 'Erich Gamma', 1994, 29.99);

        // Act
        ebook.displayDetails();

        // Assert
        expect(console.log).toHaveBeenCalledWith('Title: Design Patterns');
        expect(console.log).toHaveBeenCalledWith('Author: Erich Gamma');
        expect(console.log).toHaveBeenCalledWith('Publication Year: 1994');
        expect(console.log).toHaveBeenCalledWith('Price: $29.99');
    });
});

