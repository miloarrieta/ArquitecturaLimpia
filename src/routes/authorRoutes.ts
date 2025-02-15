router.get("/:id", async (req, res) => {
    try {
        const author = await authorUseCases.getAuthorById(req.params.id);
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.json(author);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
