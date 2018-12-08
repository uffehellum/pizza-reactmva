using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using System;
using System.IO;

namespace SxcJasmine
{
    [TestClass]
    public class ScenarioPostFormAndSeeResult
    {
        private ChromeDriver _driver;
        private WebDriverWait _wait;

        [TestInitialize]
        public void Init()
        {
            var chrmOptions = new ChromeOptions();
            chrmOptions.AddArgument("headless");
            _driver = new ChromeDriver(chrmOptions);
            _driver.Navigate().GoToUrl("http://localhost:3001");
            _driver.Manage().Window.Maximize();
            _wait = new WebDriverWait(_driver, TimeSpan.FromSeconds(1));
        }

        [TestCleanup]
        public void Cleanup()
        {
            _driver.Close();
        }
        private void NavigateToFormsPage()
        {
            _driver.FindElement(By.CssSelector(@"li a[href='/posts']")).Click();
            //# root > div > div:nth-child(3) > div:nth-child(1) > h1
            var heading = _wait.Until(SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(
                By.CssSelector(@"h1")));
            TakeScreenShot(_driver, "NavigateToFormsPage");
            Assert.AreEqual("Add Post", heading.Text);

        }

        [TestMethod]
        public void VerifyScenarioPostFormAndSeeResult()
        {
            NavigateToFormsPage();
            FillTitleFieldAndSubmitWithEnter(titleValue: "Really new post");
            FindNewPostOnList("Really new post");
        }

        private void FindNewPostOnList(string titleValue)
        {
            var newpost = _wait.Until(
                SeleniumExtras.WaitHelpers.ExpectedConditions.ElementExists(
                By.XPath($"//td[contains(text(),'{titleValue}')]")));
            Assert.AreEqual(titleValue, newpost.Text);
            Assert.IsNotNull(newpost);
        }

        private void FillTitleFieldAndSubmitWithEnter(string titleValue)
        {
            LocateAndTypeInTextField("title", titleValue);
            LocateAndTypeInTextField("title", Keys.Return);
        }

        private void LocateAndTypeInTextField(string fieldname, string keystrokes)
        {
            var titlefield = _driver.FindElement(By.CssSelector($"input[name='{fieldname}']"));
            titlefield.SendKeys(keystrokes);
        }
        private void TakeScreenShot(IWebDriver driver, string TestName)
        {
            string path = Directory.GetCurrentDirectory();

            Screenshot screenshot = ((ITakesScreenshot)driver).GetScreenshot();
            String fp = path + "\\" + TestName + "_" + DateTime.Now.ToString("dd_MMMM_hh_mm_ss_tt") + ".png";
            screenshot.SaveAsFile(fp, ScreenshotImageFormat.Png);
        }

    }
}
