package gwt.material.design.demo.selenium.test.base;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class AbstractSeleniumTest {

    protected WebDriver driver;
    protected String gmdUrl;

    public AbstractSeleniumTest(WebDriverManager driver, String component) {
        this(driver);
        searchComponent(component);
    }

    public AbstractSeleniumTest(WebDriverManager manager) {
        this.gmdUrl = manager.getBaseUrl();
        this.driver = manager.getDriver();
    }

    protected abstract void runTests();

    protected void scrollTo(WebElement element) {
        Actions actions = new Actions(driver);
        actions.moveToElement(element);
        actions.perform();
    }

    protected void visit(String url) {
        driver.get(url);
    }

    protected void click(String cssSelector) {
        findElement(cssSelector).click();
    }

    protected void sendKeys(String text, String cssSelector) {
        findElement(cssSelector).sendKeys(text);
    }

    protected void scrollToSection(int index) {
        scrollTo(findSection(index));
    }

    protected void searchComponent(String component) {
        waitUntilDisplayed("header nav .nav-wrapper a:nth-child(3)");

        WebElement searchIcon = findElement("header nav .nav-wrapper a:nth-child(3)");
        Assert.assertNotNull(searchIcon);
        searchIcon.click();

        WebElement searchInput = findElement("header nav .nav-wrapper .input-field input[type=search]");
        Assert.assertNotNull(searchInput);
        searchInput.sendKeys(component);
        searchInput.sendKeys(Keys.ENTER);

        runTests();
    }

    protected void waitUntilDisplayed(String cssSelector) {
        WebDriverWait wait = new WebDriverWait(driver, 5);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(cssSelector)));
    }

    // It is a 1-based index
    protected WebElement findSection(int index) {
        return findElement(".code:nth-child("+ index + ")");
    }

    protected WebElement findElement(String selector) {
        waitUntilDisplayed(selector);
        return driver.findElement(By.cssSelector(selector));
    }

    protected void reload() {
        driver.get(gmdUrl);
    }
}