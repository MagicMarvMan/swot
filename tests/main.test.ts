import { expect } from "chai";
import { isAcademic } from "./../src";

function makeid(length: number): string {
	let result: string = "";
	const characters: string =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength: number = characters.length;
	for (let i: number = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

describe("isAcademic Test Suite", function () {
	it("Test berlin.de", () => {
		expect(isAcademic("berlin.de")).to.equal(true);
	});
	it("Test stanford.edu", () => {
		expect(isAcademic("stanford.edu")).to.equal(true);
	});
	it("Test github.com", () => {
		expect(isAcademic("github.com")).to.equal(false);
	});
	it("Test itb.edu.bn", () => {
		expect(isAcademic("itb.edu.bn")).to.equal(true);
	});
	it("Test itb.bn", () => {
		expect(isAcademic("itb.bn")).to.equal(false);
	});
	it("Test yorkuniversity.us", () => {
		expect(isAcademic("yorkuniversity.us")).to.equal(true);
	});
	const randomString1: string = makeid(16);
	const randomString2: string = makeid(16);
	const randomString3: string = makeid(16);
	const randomString4: string = makeid(16);
	const randomString5: string = makeid(16);
	const randomString6: string = makeid(16);
	const randomString7: string = makeid(16);
	const randomString8: string = makeid(16);
	const randomString9: string = makeid(16);
	const randomString10: string = makeid(16);
	it("Test " + randomString1 + ".edu", () => {
		expect(isAcademic(randomString1 + ".edu")).to.equal(true);
	});
	it("Test " + randomString2 + ".ac.ae", () => {
		expect(isAcademic(randomString2 + ".ac.ae")).to.equal(true);
	});
	it("Test america.edu", () => {
		expect(isAcademic("america.edu")).to.equal(false);
	});
	it("Test mail.america.edu", () => {
		expect(isAcademic("mail.america.edu")).to.equal(false);
	});
	it("Test mail@berlin.de", () => {
		expect(isAcademic("mail@berlin.de")).to.equal(true);
	});
	it("Test mail@" + randomString3 + ".edu", () => {
		expect(isAcademic("mail@" + randomString3 + ".edu")).to.equal(true);
	});
	it("Test mail@" + randomString4 + ".ac.ae", () => {
		expect(isAcademic("mail@" + randomString4 + ".ac.ae")).to.equal(true);
	});
	it("Test mail@www.duke.edu", () => {
		expect(isAcademic("mail@www.duke.edu")).to.equal(true);
	});
	it("Test www.enis.rnu.tn", () => {
		expect(isAcademic("www.enis.rnu.tn")).to.equal(true);
	});
	it("Test enis.rnu.tn", () => {
		expect(isAcademic("enis.rnu.tn")).to.equal(true);
	});
	it("Test mail@enis.rnu.tn", () => {
		expect(isAcademic("mail@enis.rnu.tn")).to.equal(true);
	});
	it("Test mail@www.enis.rnu.tn", () => {
		expect(isAcademic("mail@www.enis.rnu.tn")).to.equal(true);
	});
	it("Test " + randomString5 + ".rnu.tn", () => {
		expect(isAcademic(randomString5 + ".rnu.tn")).to.equal(false);
	});
	it("Test www." + randomString6 + ".rnu.tn", () => {
		expect(isAcademic("www." + randomString6 + ".rnu.tn")).to.equal(false);
	});
	it("Test lreilly@stanford.edu", () => {
		expect(isAcademic("lreilly@stanford.edu")).to.equal(true);
	});
	it("Test lreilly@strath.ac.uk", () => {
		expect(isAcademic("lreilly@strath.ac.uk")).to.equal(true);
	});
	it("Test lreilly@soft-eng.strath.ac.uk", () => {
		expect(isAcademic("lreilly@soft-eng.strath.ac.uk")).to.equal(true);
	});
	it("Test pedro@ugr.es", () => {
		expect(isAcademic("pedro@ugr.es")).to.equal(true);
	});
	it("Test lee@uottawa.ca", () => {
		expect(isAcademic("lee@uottawa.ca")).to.equal(true);
	});
	it("Test lee@leerilly.net", () => {
		expect(isAcademic("lee@leerilly.net")).to.equal(false);
	});
});
