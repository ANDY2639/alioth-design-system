import { useState } from "react";
import { Autocomplete } from "@/presentation/components/CoreUIX/Form/components/Autocomplete";
import { AutocompleteAsync } from "@/presentation/components/CoreUIX/Form/components/AutocompleteAsync";
import { Button } from "@/presentation/components/CoreUIX/Form/components/Button";
import { Checkbox, CheckboxGroup } from "@/presentation/components/CoreUIX/Form/components/Checkbox";
import { Input } from "@/presentation/components/CoreUIX/Form/components/Input";
import { InputOTP } from "@/presentation/components/CoreUIX/Form/components/InputOTP";
import { InputPassword } from "@/presentation/components/CoreUIX/Form/components/InputPassword";
import { Radio, RadioGroup } from "@/presentation/components/CoreUIX/Form/components/Radio";
import { Select } from "@/presentation/components/CoreUIX/Form/components/Select";
import { Slider } from "@/presentation/components/CoreUIX/Form/components/Slider";
import { Switch } from "@/presentation/components/CoreUIX/Form/components/Switch";
import { Textarea } from "@/presentation/components/CoreUIX/Form/components/Textarea";
import FormProvider from "@/presentation/components/CoreUIX/Form/context/FormProvider";
import Col from "@/presentation/components/CoreUIX/Layout/Col";
import Row from "@/presentation/components/CoreUIX/Layout/Row";
import { cities, Comment, countries, FormsProps, Post } from "./FormsConfig";

const Forms = ({ initialValues, validationSchema, onSubmit, submittedData, submitError }: FormsProps) => {
  const [postId, setPostId] = useState<string | null>(null);
  const [, setCommentId] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Form Components Demo</h1>
        <p className="text-lg text-default-500">Comprehensive showcase of all HeroUI form components with Zod validation</p>
      </div>

      <FormProvider initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Row gap="lg">
          <Col xs={12}>
            <h2 className="text-2xl font-semibold">Text Inputs</h2>
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Email Input</p>
            <Input name="email" label="Email" type="email" placeholder="Enter your email" isRequired />
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Password Input</p>
            <InputPassword name="password" label="Password" placeholder="Enter your password" isRequired />
          </Col>

          <Col xs={12}>
            <p className="text-lg font-semibold mb-2">Textarea Input</p>
            <Textarea name="bio" placeholder="Enter your bio" />
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">OTP Input</p>
            <InputOTP name="otp" length={6} isRequired />
          </Col>

          <Col xs={12}>
            <h2 className="text-2xl font-semibold">Selection Controls</h2>
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Select Input</p>
            <Select name="country" label="Country" placeholder="Select a country" isRequired items={countries} />
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Autocomplete Input</p>
            <Autocomplete name="city" label="City" placeholder="Search for a city" isRequired defaultItems={cities} />
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Autocomplete Async Input</p>
            <AutocompleteAsync<Post>
              name="post"
              label="Post"
              dependsOn="root"
              fetchOptions={async () => {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                return res.json();
              }}
              getKey={post => post.id.toString()}
              getLabel={post => post.title}
              onValueChange={id => {
                setPostId(id);
                setCommentId(null);
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Autocomplete Async Input</p>
            <AutocompleteAsync<Comment>
              name="comment"
              label="Comment"
              dependsOn={postId}
              fetchOptions={async (postId: string) => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                return res.json();
              }}
              getKey={comment => comment.id.toString()}
              getLabel={comment => comment.name}
              onValueChange={id => {
                setCommentId(id);
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Radio Group Input</p>
            <RadioGroup name="gender" label="Gender" orientation="horizontal" isRequired>
              <Radio name="gender" value="male">
                Male
              </Radio>
              <Radio name="gender" value="female">
                Female
              </Radio>
              <Radio name="gender" value="other">
                Other
              </Radio>
            </RadioGroup>
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Checkbox Group Input</p>
            <CheckboxGroup name="interests" label="Interests" description="Select at least one" isRequired>
              <Checkbox name="interests" value="sports">
                Sports
              </Checkbox>
              <Checkbox name="interests" value="music">
                Music
              </Checkbox>
              <Checkbox name="interests" value="tech">
                Technology
              </Checkbox>
              <Checkbox name="interests" value="travel">
                Travel
              </Checkbox>
            </CheckboxGroup>
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Checkbox Input</p>
            <Checkbox name="acceptTerms" isRequired>
              I accept the terms and conditions
            </Checkbox>
          </Col>

          <Col xs={12}>
            <h2 className="text-2xl font-semibold">Interactive Controls</h2>
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Switch Input</p>
            <Switch name="notifications">Enable notifications</Switch>
          </Col>

          <Col xs={12} md={6}>
            <p className="text-lg font-semibold mb-2">Slider Input</p>
            <Slider name="volume" label="Volume" minValue={0} maxValue={100} step={1} defaultValue={50} />
          </Col>

          <Col xs={12}>
            <h2 className="text-2xl font-semibold">Submit</h2>
          </Col>

          <Col xs={12}>
            <div className="flex gap-4 mt-6 w-full">
              <Button type="submit" color="primary">
                Submit Form
              </Button>
            </div>
          </Col>
        </Row>
      </FormProvider>

      {submittedData && (
        <div className="mt-8 p-6 bg-success-50 dark:bg-success-900/20 rounded-lg border border-success-200 dark:border-success-800">
          <h3 className="text-xl font-semibold text-success-700 dark:text-success-400 mb-4">Form Submitted Successfully!</h3>
          <pre className="bg-white dark:bg-default-100 p-4 rounded overflow-auto">{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}

      {submitError && (
        <div className="mt-8 p-6 bg-danger-50 dark:bg-danger-900/20 rounded-lg border border-danger-200 dark:border-danger-800">
          <h3 className="text-xl font-semibold text-danger-700 dark:text-danger-400 mb-2">Submission Error</h3>
          <p className="text-danger-600 dark:text-danger-300">{submitError}</p>
        </div>
      )}

      <div className="mt-12 p-6 bg-default-100 dark:bg-default-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Available Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Input", description: "Text input field" },
            { name: "Password", description: "Password input with visibility toggle" },
            { name: "Textarea", description: "Multi-line text input" },
            { name: "InputOTP", description: "One-time password input" },
            { name: "Select", description: "Dropdown selection" },
            { name: "Autocomplete", description: "Searchable dropdown" },
            { name: "AutocompleteAsync", description: "Searchable dropdown with async data" },
            { name: "Checkbox", description: "Single or grouped checkboxes" },
            { name: "Radio", description: "Radio button group" },
            { name: "Switch", description: "Toggle switch" },
            { name: "Slider", description: "Range slider" },
          ].map(component => (
            <div key={component.name} className="p-4 bg-white dark:bg-default-100 rounded-lg">
              <h3 className="font-semibold text-lg">{component.name}</h3>
              <p className="text-sm text-default-500">{component.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;
