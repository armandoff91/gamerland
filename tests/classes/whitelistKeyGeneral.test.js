const WhitelistKey = require("../../services/whitelistKey")

test("add general type requirement, correct type", () => {
    const sampleData = {
        sampleKey: "HelloWorld"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralTypeRequirement("string")
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(true)
})

test("add general Type Requirement: false type", () => {
    const sampleData = {
        sampleKey: "HelloWorld"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralTypeRequirement("number")
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(false)
})

test("add general Requirement: value equals to 'abc'(true)", () => {
    const sampleData = {
        sampleKey: "abc"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("value", "equal to", "abc")
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(true)
})

test("add general Requirement: value equals to 'abc'(false)", () => {
    const sampleData = {
        sampleKey: "notabc"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("value", "equal to", "abc")
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(false)
})

test("add general Requirement: value.length equals to 3 (true)", () => {
    const sampleData = {
        sampleKey: "abc"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("length", "equal to", 3)
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(true)
})

test("add general Requirement: value.length equals to 3 (false)", () => {
    const sampleData = {
        sampleKey: "a lot longer than 3"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("length", "equal to", 3)
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(false)
})


test("add general Requirement: value must include (true)", () => {
    const sampleData = {
        sampleKey: "asdasdasdimportantasdasd"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("value", "include", "important")
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(true)
})

test("add general Requirement: value must include (false))", () => {
    const sampleData = {
        sampleKey: "asdasdasdasd"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("value", "include", "important")
    expect(sampleKey.generalRequirement.length).toBe(1)
    expect(sampleKey.validateGeneralRequirement()).toBe(false)
})

test("add general Requirement: multiple requirement (true)", () => {
    const sampleData = {
        sampleKey: "abcdef"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("length", "greater than", 0)
    sampleKey.addGeneralRequirement("value", "equal to", "abcdef")
    sampleKey.addGeneralRequirement("value", "not equal to", "ban words")
    expect(sampleKey.generalRequirement.length).toBe(3)
    expect(sampleKey.validateGeneralRequirement()).toBe(true)
})

test("add general Requirement: multiple requirement (false)", () => {
    const sampleData = {
        sampleKey: "abcdef"
    }
    var sampleKey = new WhitelistKey("sampleKey", sampleData)
    sampleKey.addGeneralRequirement("length", "greater than", 0)
    sampleKey.addGeneralRequirement("value", "equal to", "abcdeff")
    sampleKey.addGeneralRequirement("value", "not equal to", "ban words")
    expect(sampleKey.generalRequirement.length).toBe(3)
    expect(sampleKey.validateGeneralRequirement()).toBe(false)
})